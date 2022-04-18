import Mockjs from 'mockjs';

(function () {
  Mockjs.mock(/\/api\/login/, () => {
    return {
      ret: 0,
      errCode: 0,
      msg: 'success',
      date: [],
    };
  });
})();
