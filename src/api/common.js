/**
 * ship模块接口列表
 */

import base from './base'; // 导入接口域名列表
import axios from '@/utils/http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块

const common = {
  // 系统用户 API ，货主pic=shipPIC
  // 用户角色名称: [ 船舶维护人-shipPIC, 货盘客服-cargoPIC,船盘客服-shipTransPIC, 客户维护人-custPIC] ）
  getFindUsers(roleName) {
    return axios.get(`${base.common}/user/findUsers/` + roleName);
  },
  // 查询数据字典
  // 类型（gsxz.公司性质，hzdj.货主等级，cddj.船东等级，bxgs.保险公司，hyfl.行业分类,hz.货种,scStatus.船盘货盘状态）
  getFindDict(type) {
    return axios.get(`${base.common}/common/findDict/` + type);
  },
  // 港口列表
  getPortList() {
    return axios.get(`${base.common}/common/findPortList`);
  },
  // 船名列表
  getShipList() {
    return axios.get(`${base.common}/common/getShipList`);
  },
}

export default common;
