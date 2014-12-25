serviceFunction = $(function () {
    var organizationOperations = new Array("CreateOrganization", "DeleteOrganization", "UpdateOrganization", "GetOrganizations");
    var userOperations = new Array("CreateUser", "DeleteUser", "UpdateUser", "GetUsers");
    var applicationOperations = new Array("CreateApplication", "DeleteApplication", "UpdateApplication", "GetApplications");
    var directoryOperations = new Array("CreateDirectory", "DeleteDirectory", "UpdateDirectory", "GetDirectories");

    var org = new Array();
    org['Organization'] = new Array();
    org['Organization']['CreateOrganization'] = new Array("CreateOrganization");
    org['Organization']['UpdateOrganization'] = new Array("UpdateOrganization");
    org['Organization']['DeleteOrganization'] = new Array("DeleteOrganization_SoftDelete", "DeleteOrganization_HardDelete");
    org['Organization']['GetOrganizations'] = new Array("GetOrganizationById", "GetOrganizationByName");

    var user = new Array();
    user['User'] = new Array();
    user['User']['CreateUser'] = new Array("CreateUser");
    user['User']['UpdateUser'] = new Array("UpdateUser");
    user['User']['DeleteUser'] = new Array("DeleteUser_SoftDelete", "DeleteUser_HardDelete");
    user['User']['GetUsers'] = new Array("GetUserById", "GetUserByName");

    var application = new Array();
    application['Application'] = new Array();
    application['Application']['CreateApplication'] = new Array("CreateApplication");
    application['Application']['UpdateApplication'] = new Array("UpdateApplication");
    application['Application']['DeleteApplication'] = new Array("DeleteApplication_SoftDelete", "DeleteApplication_HardDelete");
    application['Application']['GetApplications'] = new Array("GetApplicationById", "GetApplicationByName");

    var directory = new Array();
    directory['Directory'] = new Array();
    directory['Directory']['CreateDirectory'] = new Array("CreateGetDirectory");
    directory['Directory']['UpdateDirectory'] = new Array("UpdateGetDirectory");
    directory['Directory']['DeleteDirectory'] = new Array("DeleteGetDirectory_SoftDelete", "DeleteDirectory_HardDelete");
    directory['Directory']['GetDirectories'] = new Array("GetDirectoryById", "GetDirectoryByName");

    $('#ddlService').change(function () {

        var select = document.getElementById("ddlOperation");
        $('#ddlOperation').empty();
        var selectedval = $('#ddlService :selected').text();

        if (selectedval == "Organization") {
            var option = document.createElement('option');
            option.text = "--Select--";
            select.add(option);
            for (var i = 0; i < organizationOperations.length; i++) {
                var option = document.createElement('option');
                option.text = organizationOperations[i];
                select.add(option);
            }
        }
        else if (selectedval == "User") {
            for (var i = 0; i < userOperations.length; i++) {
                var option = document.createElement('option');
                option.text = userOperations[i];
                select.add(option);
            }
        }
        else if (selectedval == "Application") {
            for (var i = 0; i < applicationOperations.length; i++) {
                var option = document.createElement('option');
                option.text = applicationOperations[i];
                select.add(option);
            }
        }
        else if (selectedval == "Directory") {
            for (var i = 0; i < directoryOperations.length; i++) {
                var option = document.createElement('option');
                option.text = directoryOperations[i];
                select.add(option);
            }
        }

    });

    $("#ddlOperation").change(function () {
        var selectedService = $('#ddlService :selected').text();
        var selectedOperation = $('#ddlOperation :selected').text();
        var sampleList = document.getElementById('ddlSamples');
        $('#ddlSamples').empty();
        var option = document.createElement('option');
        option.text = "--Select--";
        sampleList.add(option);
        switch (selectedService) {
            case 'Organization':
                
                for (i = 0; i < org[selectedService][selectedOperation].length; i++) {
                    var option = document.createElement('option');
                    option.text = org[selectedService][selectedOperation][i];
                    sampleList.add(option);
                }
                break;
            case 'User':
                for (i = 0; i < user[selectedService][selectedOperation].length; i++) {
                    var option = document.createElement('option');
                    option.text = user[selectedService][selectedOperation][i];
                    sampleList.add(option);
                }
                break;
            case 'Application':
                for (i = 0; i < application[selectedService][selectedOperation].length; i++) {
                    var option = document.createElement('option');
                    option.text = application[selectedService][selectedOperation][i];
                    sampleList.add(option);
                }
                break;
            case 'Directory':
                for (i = 0; i < directory[selectedService][selectedOperation].length; i++) {
                    var option = document.createElement('option');
                    option.text = directory[selectedService][selectedOperation][i];
                    sampleList.add(option);
                }
                break;
        }
    });

    $("#ddlSamples").change(function () {
        
       var contents= readSingleFile();
        $('#tbRequestXml').val(contents);
    });

    function readSingleFile() {
        //Retrieve the first (and only!) File from the FileList object
        var fileUrl = "~/DeleteUser_HardDelete.xml";
        var reader = new FileReader();
        reader.readAsText(fileUrl);
        reader.onload = function(evt) {
            return evt.target.result;
        };
        reader.onerror = function(evt) {
            return "error reading file";
        };
    }
});




