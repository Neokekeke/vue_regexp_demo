import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate';
import zh_CN from 'vee-validate/dist/locale/zh_CN'//引入中文文件

// 配置中文
Validator.addLocale(zh_CN);

const config = {
  errorBagName: 'errors', // change if property conflicts.
  fieldsBagName: 'fields',
  delay: 0, // 是指对错误提示的延迟时间
  locale: 'zh_CN', // 中文提示配置
  strict: true, // 代表没有设置规则的表单不进行校验
  enableAutoClasses: false,
  classNames: {
    touched: 'touched', // the control has been blurred
    untouched: 'untouched', // the control hasn't been blurred
    valid: 'valid', // model is valid
    invalid: 'invalid', // model is invalid
    pristine: 'pristine', // control has not been interacted with
    dirty: 'dirty' // control has been interacted with
  },
  events: 'input', // 默认是input|blur ,就是在用户输入和表单失去焦点时都进行校验，这里我改成了blur，即只有失去焦点时才开始验证
  inject: true
};

const dictionary = {
  zh_CN : {
    messages : {
      email : () => '邮箱格式不正确哦~',
      text : () => '用户名输入格式不正确哦~',
      password : () => '密码位数格式不对哦~'
    }
  }
};

Validator.updateDictionary(dictionary);
Vue.use(VeeValidate , config);


// 自定义验证器
// 验证用户名
Validator.extend('text', {
  messages: {
    zh_CN : field => field+'用户名输入不正确'
  },
  validate : value => {
    return /^[1-9][0-9]{4,14}$/.test(value);
  }
});

Validator.extend('word',{
  messages : {
    zh_CN : () => '请输入字母不包含数字'
  },
  validate : value => {
    return /^[a-z][A-Z]$/.test(value);
  }
});

Validator.extend('pwd',{
  messages : {
    zh_CN : () => '请输入正确的密码不包含*_%'
  },
  validate : value => {
    return /[a-z][A-Z][0-9]/.test(value);
  }

})












