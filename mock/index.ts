import {createProdMockServer} from 'vite-plugin-mock/es/createProdMockServer';
import LoginApi from './sys/user';



export function setupProdMockServer() {
    createProdMockServer([...LoginApi]);
}