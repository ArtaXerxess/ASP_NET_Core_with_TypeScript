# ADD TypeScript to ASP.NET Core MVC project

Refer: [Tutorial: Add TypeScript to an ASP.NET Core project](https://learn.microsoft.com/en-us/visualstudio/javascript/tutorial-aspnet-with-typescript?view=vs-2022)

## TL;DR

1. install Microsoft.TypeScript.MSBuild
2. create tsconfig.json
3. create scripts/app.ts
1. include `<script src="~/js/app.js"></script>` in __Layout.cshtml_



## Steps to Add TypeScript to ASP.NET Core MVC Project

1. **Install TypeScript**:
    - Open the project in Visual Studio.
    - Go to `Tools` > `NuGet Package Manager` > `Manage NuGet Packages for Solution`.
    - Search for `Microsoft.TypeScript.MSBuild` and install it.

2. **Add a TypeScript Configuration File**:
    - Right-click on the project in Solution Explorer.
    - Select `Add` > `New Item`.
    - Choose `TypeScript JSON Configuration File` and name it `tsconfig.json`.

3. **Configure TypeScript**:
    - Open `tsconfig.json` and configure it as needed. For example:
      ```json
      {
        "compileOnSave": true,
        "compilerOptions": {
            "noImplicitAny": false,
            "noEmitOnError": true,
            "removeComments": false,
            "sourceMap": true,
            "target": "ES6",
            "outDir": "wwwroot/js"
        },
        "include": [
            "scripts/**/*"
        ],
        "exclude": [
            "node_modules",
            "wwwroot"
        ] 
      }
      ```

4. **Add TypeScript Files**:
    - Create a folder named `Scripts` in the project root.
    - Add `.ts` files inside the `Scripts` folder.

5. **Compile TypeScript**:
    - Build the project in Visual Studio to compile `.ts` files into `.js` files.

6. **Include Compiled JavaScript in Views**:
    - Reference the compiled `.js` files in your Razor views using `<script>` tags:
      ```html
      <script src="js/your-script.js"></script>
      ```

7. **Run and Test**:
    - Run the project and ensure the TypeScript functionality works as expected.

For more details, refer to the [official documentation](https://learn.microsoft.com/en-us/visualstudio/javascript/tutorial-aspnet-with-typescript?view=vs-2022).
