# US Map #

This is a fork of the fantastic NewSignature US Map jQuery plugin. 

New features:
* Can specify how states should be styled after being clicked by setting stateClickStyles.
    * Persistence can be set with a second parameter. False: Reset style when new state is clicked. True: Styling lasts as states are clicked.
* Can specify how a specific state should be styled after being clicked by setting stateSpecificClickStyles (behavior same as above).
* Can enable tool tips for the states by setting enableToolTips.
* New features depend on updated version of Raphael (included in this repo's lib directory)

Example:

    $('#map').usmap({
      stateClickStyles: {fill: '#B9BF15', persistent: false},
      enableToolTips: true
    })
