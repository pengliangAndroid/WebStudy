requirejs.config({
    baseUrl: 'js/',
    paths:{
        myDataService: './modules/dataservice',
        myAlerter: './modules/alerter'
    }
});

requirejs(['myAlerter'],function(alerter){
    alerter.showMsg();
})();