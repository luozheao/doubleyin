
import  '../css/csstest.css'

import $ from 'jquery';

$('#hello').click(function () {
    require(['./b.js'],function (require) {
        require('./a.js');
    });
});