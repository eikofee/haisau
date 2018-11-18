module.exports = {
    'Modify Project' : function (client) {
        client
            .url("http://webserver:80/createProject.php")
            .pause(1000)
            .setValue("input[name='projectName']", 'DummyProjectName')
            .setValue("input[name='sprintDuration']", 42)
            .click("input[id='bCreate']")
            .pause(1000)
            .url("http://webserver:80/projectList.php")
            .waitForElementVisible("body", 1000)
            .assert.elementPresent("a[href*='modifyProject'][href*='DummyProjectName']")
            .click("a[href*='modifyProject'][href*='DummyProjectName']")
            .pause(1000)
            .waitForElementVisible("body", 1000)
            //.url(function (res) {console.log(res.value);})
            .assert.containsText("h1", "Modify project DummyProjectName")
            .setValue("input[name='projectName']", "DummyProjectNameEdited")
            .click("input[id='bCreate']")
            .pause(1000)
            //.url(function (res) {console.log(res.value);})
            //.source(function (res) {console.log(res.value);})
            .assert.elementPresent("a[href*='modifyProject'][href*='DummyProjectNameEdited']")           
            .click("a[href*='modifyProject'][href*='DummyProjectNameEdited']")
            .pause(1000)
            .click("a")
            .pause(1000)
            .assert.title("Project List")
            .assert.elementPresent("a[href*='modifyProject'][href*='DummyProjectNameEdited']")           
            .click("a[href*='modifyProject'][href*='DummyProjectNameEdited']")
            .pause(1000)
            .setValue("input[name='projectName']", "")
            .click("input[id='bCreate']")
            .pause(1000)
            .assert.containsText("a", "Go back")
            .click("a")
            .pause(1000)
            .assert.urlContains("modifyProject.php")
            .assert.containsText("h1", "DummyProjectNameEdited")
            .click("a")
            .pause(1000)
            .assert.urlContains("projectList.php")
            .assert.elementPresent("a[href*='modifyProject'][href*='DummyProjectNameEdited']")           
            .end()
    }
};