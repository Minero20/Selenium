*** Settings ***
Library    SeleniumLibrary
Library    ExcelLibrary

*** Variables ***
${userNpass}

*** Test Cases ***
First Test it's Work.
    ${data}    Read Excel Data    Data\\UserPass.xlsx    UserPass    2    1    2    2
    Log To Console    \n\tRow 2 Col 1\n\tUsername\t${data[0]}\n\tRow 2 Col 2\n\tPassword\t${data[1]}

Second Test it's Work.
    ${data}    Read Excel Data    Data\\UserPass.xlsx    UserPass    3    1    3    2
    Log To Console    \n\tRow 3 Col 1\n\tUsername\t${data[0]}\n\tRow 3 Col 2\n\tPassword\t${data[1]}

1. Get Username and Password from execl.
    ${userNpass}    Read Excel Data    Data\\UserPass.xlsx    UserPass    4    1    4    2 
    Set Global Variable    ${userNpass}
    
2. Opening Facebook.
    Open Browser    https://www.facebook.com/    edge

3. Entering username.
    Entering Something By Id    email    ${userNpass[0]}

4. Entering password.
    Entering Something By Id    pass    ${userNpass[1]}

5. Clicking login button.
    Click Button    name:login

6. Close Browser.
    Sleep    5s
    Close Browser

*** Keywords ***
Read Excel Data
    [Arguments]    ${filepath}    ${sheetname}    ${userrow}    ${usercol}    ${passrow}    ${passcol}
    Open Excel Document    ${filepath}    1    True
    Get Sheet    ${sheetname}
    ${username}    Read Excel Cell    ${userrow}    ${usercol}
    ${password}    Read Excel Cell    ${passrow}    ${passcol}
    [Return]    ${username}    ${password}
    Close Current Excel Document

Entering Something By Id
    [Arguments]    ${id}    ${str}
    Input Text    id=${id}    ${str}