import {createStyleImportPlugin, VxeTableResolve} from 'vite-plugin-style-import'

export function configVxeTablePlugin() {
    return createStyleImportPlugin({
        resolves: [
            VxeTableResolve()
        ],
    })
}
