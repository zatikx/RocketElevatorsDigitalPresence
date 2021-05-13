$(document).ready(function () {
    $('.building_type').hideforms();
    
    $('#buildingType').on('change', function () {
      showForm(this.value);
    })
});
function showForm(buildingType) {
    hideforms();

    switch (buildingType) {
        case BUILDING_TYPE_RESIDENTIAL:
            getResidential().show();
            break;
            case BUILDING_TYPE_COMMERCIAL:
                getCommercial().show();
                break;
                case BUILDING_TYPE_CORPORATE:
                    getCorporate().show();
                    break;
                    case BUILDING_TYPE_HYBRID:
                        getHybrid().show();
                        break;
                        default:
                            break;
                        }
                    }

    



function getResidential() {
    return $('#apartments-R, #floors-R, #basements-R');
}

function getCommercial() {
    return $('#distinct-C, #floors-C, #basements-C, #parking-C, #elevator-C');
}

function getCorporate() {
    return $('#tenant-CP, #floors-CP, #basements-CP, #parking-CP, #occupants-CP');
}

function getHybrid() {
    return $('#distinct-H, #floors-H, #basements-H, #parking-H, #occupants-H, #hours-H');
}




function hideforms()
getResidential().hide();
getCommercial().hide();
getCorporate().hide();
getHybrid().hide();



