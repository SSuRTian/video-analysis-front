import axios from 'axios'

// 创建实例
const instance = axios.create({
    // 及地址要修改
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });

// 自定义配置


// 导出
export default instance;