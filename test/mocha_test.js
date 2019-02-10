/**
 * Test with Selenium for frontend Ramverk2.
 */
"use strict";



const assert = require("assert");
const test = require("selenium-webdriver/testing");
const webdriver = require("selenium-webdriver");
const By = webdriver.By;

let browser;

// Test suite
test.describe("Frontend Ramverk2 mahw17", function() {

    test.beforeEach(function(done) {
        this.timeout(20000);
        browser = new webdriver.Builder().
            withCapabilities(webdriver.Capabilities.firefox()).build();

        browser.get("http://localhost:3000/");
        done();
    });

    test.afterEach(function(done) {
        browser.quit();
        done();
    });


    function goToNavLink(target) {
        browser.findElement(By.linkText(target)).then(function(element) {
            element.click();
        });
    }

    function goToButtonLink(target) {
        browser.findElement(By.className(target)).then(function(element) {
            element.click();
        });
    }

    function matchUrl(target) {
        browser.getCurrentUrl().then(function(url) {
            assert.ok(url.endsWith("/" + target));
        });
    }

    function assertH1(target) {
        browser.findElement(By.css("h1")).then(function(element) {
            element.getText().then(function(text) {
                assert.equal(text, target);
            });
        });
    }

    function assertH4(target) {
        browser.findElement(By.css("h4")).then(function(element) {
            element.getText().then(function(text) {
                assert.equal(text, target);
            });
        });
    }

    function assertSmall(target) {
        browser.findElement(By.css("small")).then(function(element) {
            element.getText().then(function(text) {
                assert.equal(text, target);
            });
        });
    }

    // Test case
    test.it("Test index-sida", function(done) {
        let promise = browser.getTitle();

        promise.then(function(title) {
            assert.equal(title, "Ramverk2 - mahw17");
        });

        browser.getTitle().then(function(title) {
            assert.equal(title, "Ramverk2 - mahw17");
        });

        done();
    });

    test.it("Test go to OM MIG", function(done) {
        // try use nav link
        goToNavLink("OM MIG");

        assertSmall("mahw17");
        matchUrl("user" );

        done();
    });

    test.it("Test go to KMOM01", function(done) {
        goToNavLink("KMOM01");

        // get h1 text
        assertH1("KMOM01");
        matchUrl("report/kmom01");

        done();
    });

    test.it("Test go to Login form", function(done) {
        goToButtonLink("btn");

        // get h4 text
        assertH4("Logga in");
        matchUrl("user/login");

        done();
    });
});
