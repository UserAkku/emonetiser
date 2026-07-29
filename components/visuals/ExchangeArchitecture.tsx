"use client";

import { useCallback, useState } from 'react';
import { ReactFlow, Background, Edge, Node, Position, MarkerType, applyNodeChanges, applyEdgeChanges, NodeChange, EdgeChange } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const initialNodes: Node[] = [
  // Supply Nodes
  { 
    id: 'web', position: { x: 50, y: 50 }, 
    data: { label: 'Web Inventory' }, 
    sourcePosition: Position.Right, targetPosition: Position.Left, 
    style: { background: 'var(--card)', color: 'var(--foreground)', border: '1px solid var(--border)', borderRadius: '8px', fontSize: '12px', padding: '10px 15px' },
    draggable: false,
  },
  { 
    id: 'app', position: { x: 50, y: 150 }, 
    data: { label: 'App Inventory' }, 
    sourcePosition: Position.Right, targetPosition: Position.Left, 
    style: { background: 'var(--card)', color: 'var(--foreground)', border: '1px solid var(--border)', borderRadius: '8px', fontSize: '12px', padding: '10px 15px' },
    draggable: false,
  },
  { 
    id: 'ctv', position: { x: 50, y: 250 }, 
    data: { label: 'CTV Inventory' }, 
    sourcePosition: Position.Right, targetPosition: Position.Left, 
    style: { background: 'var(--card)', color: 'var(--foreground)', border: '1px solid var(--border)', borderRadius: '8px', fontSize: '12px', padding: '10px 15px' },
    draggable: false,
  },
  
  // Exchange Core
  { 
    id: 'core', position: { x: 280, y: 130 }, 
    data: { 
      label: (
        <div className="flex flex-col items-center gap-1">
          <span className="font-bold text-[var(--brand-primary)] tracking-wider">UNIFIED EXCHANGE</span>
          <span className="text-[10px] text-muted-foreground opacity-80">OpenRTB 2.6 • 12ms Latency</span>
        </div>
      ) 
    }, 
    sourcePosition: Position.Right, targetPosition: Position.Left, 
    style: { background: 'var(--background)', color: 'var(--foreground)', border: '1px solid var(--brand-primary)', borderRadius: '12px', padding: '16px', width: 220, textAlign: 'center', boxShadow: '0 0 20px -5px var(--brand-primary)' },
    draggable: false,
  },
  
  // Demand Nodes
  { 
    id: 'dsp1', position: { x: 600, y: 50 }, 
    data: { label: 'DSP Alpha ($1.20)' }, 
    sourcePosition: Position.Right, targetPosition: Position.Left, 
    style: { background: 'var(--card)', color: 'var(--muted-foreground)', border: '1px solid var(--border)', borderRadius: '8px', fontSize: '12px', padding: '10px 15px' },
    draggable: false,
  },
  { 
    id: 'dsp2', position: { x: 600, y: 150 }, 
    data: { 
      label: (
        <div className="flex flex-col items-center">
          <span className="font-bold text-[var(--brand-primary)]">DSP Beta ($3.50)</span>
          <span className="text-[10px] uppercase tracking-widest mt-1">Winning Bid</span>
        </div>
      ) 
    }, 
    sourcePosition: Position.Right, targetPosition: Position.Left, 
    style: { background: 'color-mix(in srgb, var(--brand-primary) 10%, transparent)', color: 'var(--brand-primary)', border: '1px solid var(--brand-primary)', borderRadius: '8px', padding: '10px 15px' },
    draggable: false,
  },
  { 
    id: 'dsp3', position: { x: 600, y: 250 }, 
    data: { label: 'DSP Omega ($2.10)' }, 
    sourcePosition: Position.Right, targetPosition: Position.Left, 
    style: { background: 'var(--card)', color: 'var(--muted-foreground)', border: '1px solid var(--border)', borderRadius: '8px', fontSize: '12px', padding: '10px 15px' },
    draggable: false,
  },
];

const initialEdges: Edge[] = [
  { id: 'e-web-core', source: 'web', target: 'core', animated: true, style: { stroke: 'var(--muted-foreground)', strokeWidth: 1 } },
  { id: 'e-app-core', source: 'app', target: 'core', animated: true, style: { stroke: 'var(--muted-foreground)', strokeWidth: 1 } },
  { id: 'e-ctv-core', source: 'ctv', target: 'core', animated: true, style: { stroke: 'var(--muted-foreground)', strokeWidth: 1 } },
  
  { id: 'e-core-dsp1', source: 'core', target: 'dsp1', animated: true, style: { stroke: 'var(--muted-foreground)', strokeWidth: 1 } },
  { 
    id: 'e-core-dsp2', source: 'core', target: 'dsp2', 
    animated: true, 
    style: { stroke: 'var(--brand-primary)', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: 'var(--brand-primary)' }
  },
  { id: 'e-core-dsp3', source: 'core', target: 'dsp3', animated: true, style: { stroke: 'var(--muted-foreground)', strokeWidth: 1 } },
];

export function ExchangeArchitecture() {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  return (
    <div className="w-full h-[400px] border border-white/5 rounded-2xl overflow-hidden bg-background">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        proOptions={{ hideAttribution: true }} // Hides the React Flow watermark for a cleaner look
        nodesConnectable={false}
        elementsSelectable={false}
        zoomOnScroll={false}
        panOnDrag={true}
      >
        <Background color="var(--border)" gap={16} />
      </ReactFlow>
    </div>
  );
}
