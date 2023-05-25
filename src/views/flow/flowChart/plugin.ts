import {Snapline} from "@antv/x6-plugin-snapline";
import {History} from "@antv/x6-plugin-history";
import {Transform} from "@antv/x6-plugin-transform";
import {Clipboard} from "@antv/x6-plugin-clipboard";
import {Keyboard} from "@antv/x6-plugin-keyboard";
import {Selection} from "@antv/x6-plugin-selection";
import {Scroller} from '@antv/x6-plugin-scroller';
import {Export} from '@antv/x6-plugin-export';

export function usePlugin(graph) {
    useSnapline(graph);
    useHistory(graph);
    useTransform(graph);
    useClipboard(graph);
    useKeyboard(graph);
    useSelection(graph);
    useScroller(graph);
    useExport(graph);
}

/**
 * 对齐线
 * @description 节点排版的辅助工具
 */
function useSnapline(graph) {
    graph.use(new Snapline({
        enabled: true
    }));
}

/**
 * 撤销重做
 * @description 见名知意
 */
function useHistory(graph) {
    graph.use(new History({
        enabled: true
    }))
}

/**
 * 图像变换插件
 * @description 让组件可手动动态调节宽高
 */
function useTransform(graph) {
    graph.use(new Transform({
        resizing: {
            enabled: true,
            minHeight: 1,
            minWidth: 1,
            maxWidth: 200,
            maxHeight: 150,
            orthogonal: false,
            restrict: false,
            autoScroll: true,
            preserveAspectRatio: false,
            allowReverse: true,
        },
        rotating: true,
    }));
}

/**
 * 复制粘贴
 * @description 用于复制节点和边
 */
function useClipboard(graph) {
    graph.use(
        new Clipboard({
            enabled: true,
        })
    );
}

/**
 * 快捷键
 * @description 见名知意
 */
function useKeyboard(graph) {
    graph.use(new Keyboard({
        enabled: true,
        global: true
    }))
    graph.bindKey('ctrl+c', () => {
        const cells = graph.getSelectedCells();
        if(cells.length){
            graph.copy(cells);
        }
        return false;
    })
    graph.bindKey('ctrl+v', () => {
        const cells = graph.paste({ offset: 32 });
        graph.cleanSelection();
        graph.select(cells);
        return false;
    })
}

/**
 * 框选
 * @description 见名知意
 */
function useSelection(graph) {
    graph.use(new Selection({
        enabled: true,
        showNodeSelectionBox: true,
    }))
}

/**
 * 滚动画布
 * @description 见名知意
 */
function useScroller(graph) {
    graph.use(new Scroller({
        enabled: true,
    }))
}

/**
 * 导出
 * @description 见名知意
 */
function useExport(graph) {
    graph.use(new Export());
}