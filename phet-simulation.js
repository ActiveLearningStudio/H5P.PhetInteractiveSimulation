var H5P = H5P || {};

H5P.PhetInteractiveSimulation = (function($) {
    
    function PhetInteractiveSimulation(options, id) {
        this.id = id;
        this.options = options;
    }

    PhetInteractiveSimulation.prototype.attach = function($container) {
        var fileUrl = window.location.origin + "/sites/default/files/h5p/content/" + this.id + "/files/" + this.options.phetsimulation.path.split('/')[parseInt(this.options.phetsimulation.path.split('/').length - 1)];
        $container.append('<iframe src="' + fileUrl + '"></iframe>');
    }

    return PhetInteractiveSimulation;
})(H5P.jQuery);