import {computed, ComputedRef, ref, unref, watch} from 'vue';
import type {BasicTableProps} from '/@/components/Table/src/types/table';

/**
 * 表格加载 Hooks
 * @param props
 */
export function useLoading(props: ComputedRef<BasicTableProps>) {
    // 加载状态
    const loadingRef = ref(unref(props).loading);

    // 动态监视 loading 状态
    watch(() => unref(props).loading, (loading) => loadingRef.value = loading);

    // 设置加载状态
    function setLoading(loading: boolean) {
        loadingRef.value = loading;
    }

    // 获取加载状态
    const getLoading = computed(() => unref(loadingRef));

    return {
        getLoading,
        setLoading
    }
}