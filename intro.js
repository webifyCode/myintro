$(function() {
    $('#features').on('click', function() {
        $('#features .down, #features .up').toggle('fast');
        $('.featuresMenu').fadeToggle('fast');
    });

    $('#company').on('click', function() {
        $('#company .down, #company .up').toggle('fast');
        $('.companyMenu').fadeToggle('fast')
    });
});