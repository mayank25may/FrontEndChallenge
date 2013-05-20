App.Stats.StatsView = Backbone.View.extend({

    initialize : function() {
        console.log("StatsView has been initialized");
    },

    events : {
    },
    
    render : function() {
        this.$el.append(Mustache.render(this.options.template));
        return this;
    },
    
    onShow : function(){
        var that = this;
        $(function () {
            $('#skills-chart').highcharts({
                chart: {
                    type: 'area'
                },
                title: {
                    text: 'Web Skills'
                },
                subtitle: {
                    text: ''
                },
                xAxis: {
                    title: {
                        text: 'Time of Day'
                    },
                    labels: {
                        formatter: function() {
                            return (((this.value * 2) / 10) + 4) + ":00";
                        }
                    }
                    
                },
                yAxis: {
                    title: {
                        text: 'Web Skill Units'
                    }
                },
                tooltip: {
                    headerFormat : '',
                    pointFormat: '{point.y:,.0f} Units'
                },
                plotOptions: {
                    area: {
                        pointStart: 6,
                        marker: {
                            enabled: false,
                            symbol: 'circle',
                            radius: 2,
                            states: {
                                hover: {
                                    enabled: true
                                }
                            }
                        }
                    }
                },
                series: that.model.attributes.skills
            });
            
            $('#vistors-chart').highcharts({
                chart: {
                    type: 'line'
                },
                title: {
                    text: 'Visitors'
                },
                xAxis: {
                    categories: ['6:00', '7:00', '8:00', '9:00', '10:00', '11:00',
                    '12:00', '13:00', '14:00', '15:00', '16:00', '17:00']
                },
                yAxis: {
                    title: {
                        text: 'Visitors'
                    }
                },
                series: that.model.attributes.visitors
            });
        });
    }

});