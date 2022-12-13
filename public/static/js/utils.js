Loading = {
    show: function () {
        $.blockUI({
            message: '<img src="/static/img/loading.gif" />',
            css: {
                zIndex: '10011',
                padding: '10px',
                left: '50%',
                width: '80px',
                marginLeft: '-40px',
                border: '0',
                backgroundColor: 'rgba(0, 0, 0, 0)',
            },
            overlayCSS:  { 
                backgroundColor: '#000', 
                opacity: 0.6, 
                cursor: 'wait' 
            }, 
        });
    },
    hide: function () {
        $.unblockUI();
    }
};

Validator = {
    isEmpty: function (obj) {
        if ((typeof obj == 'string')) {
            return !obj || obj.replace(/\s+/g, '') == ''
        } else {
            return (!obj || JSON.stringify(obj) === '{}' || obj.length === 0);
        }
    },
};