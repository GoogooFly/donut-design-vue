import {createDiscreteApi} from 'naive-ui';
import type { ConfigProviderProps } from 'naive-ui';
import {computed} from 'vue';

const configProviderPropsRef = computed<ConfigProviderProps>(() => ({
    // theme: themeRef.value === 'light' ? lightTheme : darkTheme
}))

const {message: useMessage} =
    createDiscreteApi(
        ['message', 'dialog', 'notification', 'loadingBar', 'modal'],
        {
            configProviderProps: configProviderPropsRef
        }
    )

export {useMessage};