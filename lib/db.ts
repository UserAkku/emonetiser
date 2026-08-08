// Since npm install is blocked (403 Forbidden) on this network,
// we provide a lightweight native fetch wrapper for the Neon HTTP API.
// This allows the code to work without installing @neondatabase/serverless.

export type Seller = {
  id?: number;
  seller_id: string;
  name: string;
  domain: string;
  seller_type: string;
  updated_at?: Date;
};

class NeonClient {
  private connectionString: string;

  constructor(connectionString: string) {
    this.connectionString = connectionString;
  }

  async query(strings: TemplateStringsArray, ...values: any[]): Promise<any[]> {
    if (!this.connectionString) {
      console.warn('DATABASE_URL is not set.');
      return [];
    }

    try {
      // Parse the connection string
      // Format: postgres://role:password@host/database
      const url = new URL(this.connectionString);
      const host = url.hostname;
      
      // Reconstruct the SQL template into a plain string and numbered params ($1, $2)
      let query = '';
      for (let i = 0; i < strings.length; i++) {
        query += strings[i];
        if (i < values.length) {
          query += '$' + (i + 1);
        }
      }

      // Neon HTTP endpoint
      const endpoint = `https://${host}/sql`;
      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Neon-Connection-String': this.connectionString
        },
        body: JSON.stringify({ query, params: values }),
      });

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(`Neon DB Error: ${response.status} - ${errText}`);
      }

      const data = await response.json();
      
      // Neon HTTP API returns rows array directly or an object with rows
      if (data && Array.isArray(data)) {
         return data;
      } else if (data && data.rows) {
         return data.rows;
      }
      return [];

    } catch (error) {
      console.error('Neon Query Failed:', error);
      throw error;
    }
  }
}

// Create a singleton instance
export const sql = (strings: TemplateStringsArray, ...values: any[]) => {
  const client = new NeonClient(process.env.DATABASE_URL || '');
  return client.query(strings, ...values);
};

export async function initializeDatabase() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS sellers (
        id SERIAL PRIMARY KEY,
        seller_id VARCHAR(255) NOT NULL UNIQUE,
        name VARCHAR(255) NOT NULL,
        domain VARCHAR(255) NOT NULL,
        seller_type VARCHAR(255) NOT NULL,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;
    console.log('Database initialized successfully.');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
}
