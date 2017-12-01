*** Settings ***
Library    Selenium2Library

*** Variables ***
${BROWSER}        chrome
${GOOGLE URL}    https://codepen.io/brian-baum/full/BqEyL/

*** Keywords ***
เข้าไป codepen.io
    Open Browser    ${GOOGLE URL}    ${BROWSER}

*** Testcases ***
Check all required fields
    เข้าไป codepen.io
    Click Link      link=add
    
    

# Test Teardown    Close Browser