
/*
 * 院系设置，默认数字代表系号，其他情况从 200 向后排序
 * name: 院系名称
 * color: 院系导师介绍时的主题色
 */

let schoolConfig = {
    '-2': {
        name: '',
        color: '#212121'
    },
    '-1': {
        name: '点击任意按钮 start to PICK',
        color: '#212121'
    },
    '2': {
        name: '电子信息工程学院',
        color: '#009688',
        short: '电子信息'
    },
    '3': {
        name: '自动化科学与电气工程学院',
        color: '#3f51b5',
        short: '自动化'
    },
    '6': {
        name: '计算机学院',
        color: '#1976D2',
        short: '计算机'
    },
    '17': {
        name: '仪器科学与光电工程学院',
        color: '#673ab7',
        short: '仪器'
    },
    '21': {
        name: '软件学院',
        color: '#f57c00',
        short: '软件'
    },
    '38': {
        name: '无人系统研究院',
        color: '#607d8b',
        short: '无人机'
    },
    '40': {
        name: '网络空间安全学院',
        color: '#43a047',
        short: '网安'
    },
    '42': {
        name: '人工智能研究院',
        color: '#ab34ef',
        short: '人工智能'
    },    
    '49': {
        name: '集成电路科学与工程学院',
        color: '#ab67ef',
        short: '微电子'
    },
    '100': {
        name: '前沿科学技术创新研究院',
        color: '#ab9aef',
        short: '前沿科学'
    },
};

export default schoolConfig;