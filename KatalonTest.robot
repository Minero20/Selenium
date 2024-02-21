*** Settings ***
Library    SeleniumLibrary


*** Variables ***
${URL}    https://katalon-demo-cura.herokuapp.com/
${str}    Pisit Namsiri 64160168 
...    I have headache, fatigue, nausea, and pain.

*** Test Cases ***
Katalon website test.
    Go To Link    ${URL}
    Click Link by xpath    xpath://*[@id="btn-make-appointment"]
    Input text by xpath    //*[@id="txt-username"]    John Doe
    Input text by xpath    //*[@id="txt-password"]    ThisIsNotAPassword
    Click Button    id=btn-login
    Click Link by xpath    xpath:/html/body/section/div/div/form/div[1]/div/select/option[2]
    Click Button    id=chk_hospotal_readmission
    Click Button    id=radio_program_medicaid
    Input text by xpath    //*[@id="txt_visit_date"]    28/10/2023
    Input text by xpath    //*[@id="txt_comment"]    ${str}
    Click Button    id=btn-book-appointment
    Click Link by xpath    xpath:/html/body/section/div/div/div[7]/p/a
    Sleep    5s
    Close Browser


*** Keywords ***
    
Go To Link
    [Arguments]    ${url}    
    Open Browser    ${url}   firefox

Click Link by xpath
    [Arguments]    ${xpath}    
    Click Element    ${xpath} 

Input text by xpath
    [Arguments]    ${xpath}    ${name}
    Input Text    xpath=${xpath}    ${name}
