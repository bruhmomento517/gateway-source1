$(document).ready(function () {
    
    $(".button-container").hide();
    $(".userinfo-container").hide();
    $(".request").hide();

    chrome.runtime.sendMessage({ type: "CHECK_AUTH" }, function (response) {
        if (response) {
            $(".description").text("Authenticated!");
            $(".enable-container").show();
            $(".button-container").hide();
            $(".userinfo-description").val(JSON.stringify(response));

        } else {
            $(".description").text("You must verify to use Gateway tools.");
            $(".button-container").show();
            $(".enable-container").show();
        }
    });

    $(".btn-oauth").click(function () {
        chrome.runtime.sendMessage({ type: "CLICKED_OAUTH_BTN" }, function (response) {
            console.log(response);
        });
    });
    $(".soller-enable").click(function () {
        chrome.runtime.sendMessage({ type: "CLICKED_SOLLER" }, function (response) {
            console.log("CLICKED SOLLER");
            console.log(response);
            $(".request").show();
            $.get(chrome.extension.getURL('js/injected.js'),
                            function(data) {
                                var script = document.createElement("script");
                                script.setAttribute("type", "text/javascript");
                                script.innerHTML = data;
                                // document.querySelector('head').appendChild(script);
                                // document.querySelector("body").addEventListener('load', 'me_injected.init()', false);
                                document.getElementsByTagName("head")[0].appendChild(script);
                                document.getElementsByTagName("head")[0].setAttribute("onLoad", "GatewayDrug.init();");
                            }
                            );

        });
    });
});
