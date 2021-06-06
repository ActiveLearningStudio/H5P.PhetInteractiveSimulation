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
                let phetiframe = $('.phetiframe', this.container);
                $(phetiframe).width(width);
                $(phetiframe).height(height);
            }
        });
    }

    PhetInteractiveSimulation.prototype.attach = function($container) {
        if (Object.values(this.options).length === 0) {
            $container.append('<h3>No simulation configured.</h3>');
        } else if (this.options.phetSimulationFile) {
            this.container = $container;
            let isAbsoluteUrl = H5PIntegration.url.split('/').find(x => x === 'https:' || x === 'http:');
            var fileUrl = (isAbsoluteUrl ? H5PIntegration.url : window.location.origin) + "/sites/default/files/h5p/content/" + this.id + "/" + this.options.phetSimulationFile.path;
            $container.append('<iframe class="phetiframe" src="' + fileUrl + '"></iframe>');
            this.trigger('resize');
        }
    }

    return PhetInteractiveSimulation;

})(H5P.jQuery);