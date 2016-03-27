Meteor.publish('widgets', function () {
    return Widgets.find();
});

Meteor.methods({
    addWidget: function (widget) {
        Widgets.insert(widget);
    }
});