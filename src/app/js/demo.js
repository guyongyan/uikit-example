$(function () {
    var allOption = document.createElement("option");//ҳ������꣬����һ����document.ready
    aa();
   bb();
});

function aa () {

    //�ڶ��� ����׼���õ�dom����ʼ��echartsͼ��
    var myChart = echarts.init(document.getElementById('chart3'));

    option = {
        title: {
            text: 'ĳ�����������ͽ�ˮ��',
            subtext: '�����鹹'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['������', '��ˮ��']
        },
        toolbox: {
            show: true,
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                magicType: { show: true, type: ['line', 'bar'] },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                data: ['1��', '2��', '3��', '4��', '5��', '6��', '7��', '8��', '9��', '10��', '11��', '12��']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '������',
                type: 'bar',
                data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                markPoint: {
                    data: [
                        { type: 'max', name: '���ֵ' },
                        { type: 'min', name: '��Сֵ' }
                    ]
                },
                markLine: {
                    data: [
                        { type: 'average', name: 'ƽ��ֵ' }
                    ]
                }
            },
            {
                name: '��ˮ��',
                type: 'bar',
                data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                markPoint: {
                    data: [
                        { name: '�����', value: 182.2, xAxis: 7, yAxis: 183, symbolSize: 18 },
                        { name: '�����', value: 2.3, xAxis: 11, yAxis: 3 }
                    ]
                },
                markLine: {
                    data: [
                        { type: 'average', name: 'ƽ��ֵ' }
                    ]
                }
            }
        ]
    };

    // ������Ϊecharts�����������
    myChart.setOption(option);
}
function bb () {

    //�ڶ��� ����׼���õ�dom����ʼ��echartsͼ��
    var myChart = echarts.init(document.getElementById('chart2'));

    option = {
        title : {
            text: 'ĳվ���û�������Դ',
            subtext: '�����鹹',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient : 'vertical',
            x : 'left',
            data:['ֱ�ӷ���','�ʼ�Ӫ��','���˹��','��Ƶ���','��������']
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {
                    show: true,
                    type: ['pie', 'funnel'],
                    option: {
                        funnel: {
                            x: '25%',
                            width: '50%',
                            funnelAlign: 'left',
                            max: 1548
                        }
                    }
                },
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        series : [
            {
                name:'������Դ',
                type:'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'ֱ�ӷ���'},
                    {value:310, name:'�ʼ�Ӫ��'},
                    {value:234, name:'���˹��'},
                    {value:135, name:'��Ƶ���'},
                    {value:1548, name:'��������'}
                ]
            }
        ]
    };


    // ������Ϊecharts�����������
    myChart.setOption(option);
}