import {Graph, Shape} from '@antv/x6';
import {Dnd} from '@antv/x6-plugin-dnd';
import {usePlugin} from './plugin';

export class GFlowChart {
    private graph: Graph;
    private dnd: Dnd;

    constructor(FlowContainerEl: HTMLElement, DndContainerEl: HTMLElement) {

        this.initGraph(FlowContainerEl);
        this.initDnd(DndContainerEl);
        usePlugin(this.graph);
    }

    private initGraph(container: HTMLElement) {
        this.graph = new Graph({
            container,
            grid: true, // 显示网格线
            width: undefined,
            height: 600,
            autoResize: true,
            background: {
                color: "#F2F7FA"
            },
            mousewheel: {
                enabled: true
            },
            connecting: {
                router: 'manhattan',
                connector: {
                    name: 'rounded',
                    args: {
                        radius: 8,
                    },
                },
                snap: true,
                allowBlank: false,
                createEdge() {
                    return new Shape.Edge({
                        attrs: {
                            line: {
                                stroke: '#A2B1C3',
                                strokeWidth: 2,
                                targetMarker: {
                                    name: 'block',
                                    width: 12,
                                    height: 8,
                                },
                            },
                        },
                        zIndex: 0,
                    })
                },
                validateConnection({targetMagnet}) {
                    return !!targetMagnet
                },
            },
            panning: {
                enabled: true
            },
            scaling: {
                min: 0.05, // 默认值为 0.01
                max: 12 // 默认值为 16
            }
        } as any);
        this.graph.centerContent();
    }

    private initDnd(dndContainer: HTMLElement) {
        this.dnd = new Dnd({
            target: this.graph,
            scaled: false,
            dndContainer,
        })
    }

    public startDrop(event, config: { label, shape }) {
        const {label, shape} = config;
        const node = this.graph.createNode({
            label,
            shape,
            width: 100,
            height: 100,
            attrs: {
                body: {
                    strokeWidth: 1,
                    stroke: '#5F95FF',
                    fill: '#EFF4FF',
                },
                text: {
                    fontSize: 14,
                    fill: '#262626',
                },
            },
            tools:[
                {
                    name: "button-remove",
                    args:{
                        x: 0,
                        y: 0
                    }
                }
            ],
            ports:this.ports()
        })
        this.dnd.start(node, event as any);
    }

    public addNode({ label, shape, width = 100, height = 100 }){
        this.graph.addNode({
            label,
            shape,
            width,
            height,
            attrs: {
                body: {
                    strokeWidth: 1,
                    stroke: '#5F95FF',
                    fill: '#EFF4FF',
                },
                text: {
                    fontSize: 14,
                    fill: '#262626',
                },
            },
            tools:[
                {
                    name: "button-remove",
                    args:{
                        x: 0,
                        y: 0
                    }
                }
            ],
            ports:this.ports()
        })
    }
 private ports() {
        const direction = [
            { index: 0, position: "top" },
            { index: 1, position: "right" },
            { index: 2, position: "bottom" },
            { index: 3, position: "left" }
        ];
        let groups = {};
        let items = [];
        direction.forEach(({position}) => {
            groups[position] = {
                position,
                attrs: {
                    circle: {
                        r: 4,
                        magnet: true,
                        stroke: '#5F95FF',
                        strokeWidth: 1,
                        fill: '#fff',
                        style: {
                            // visibility: 'hidden',
                        },
                    }
                }
            }
            items.push({
                id: `$${position}`,
                group: position
            })
        })
      return {
          groups,
          items
      }
    }

}