var H5P = H5P || {};

H5P.PhetInteractiveSimulation = (function($) {
    
    function PhetInteractiveSimulation(options, id) {
        var self = this;
        this.id = id;
        this.options = options;
        
        self.on('resize', function () {
            if (this.container) {
                let width = H5P.jQuery(this.container).width();
                let height = width * (9/16);
                $('#phetiframe').width(width);
                $('#phetiframe').height(height);
            }
        });
    }

    PhetInteractiveSimulation.prototype.attach = function($container) {
        this.container = $container;
        var fileUrl = window.location.origin + "/sites/default/files/h5p/content/" + this.id + "/files/" + this.options.phetsimulation.path.split('/')[parseInt(this.options.phetsimulation.path.split('/').length - 1)];
        $container.append('<iframe id="phetiframe" src="' + fileUrl + '"></iframe>');
        this.trigger('resize');
    }

    return PhetInteractiveSimulation;

})(H5P.jQuery);