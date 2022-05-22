# Angular 12 with module-federation sample

## Set cli version to  12

```sh
npm install -g @angular/cli@12
```


## Create Projects and add module federation:

<p>create portal(shell)<p>

```sh
npx -p @angular/cli@12 ng new portal
ng add @angular-architects/module-federation --project portal --port 4200
```


<p>create micro front<p>

```sh
npx -p @angular/cli@12 ng new micro-front-one
ng add @angular-architects/module-federation --project micro-front-one --port 5000
```





npx -p @angular/cli@12 ng new micro-front-one

ng add @angular-architects/module-federation --project micro-front-one --port 5000




## FOR ANGULAR 12
"ng add @angular-architects/module-federation " will probably add the latest version of "ngx-build-plus" and @angular-architects/module-federation I will downgrade to the  version below to work with Angular 12

```json
 "ngx-build-plus": "^12.0.1",
 "@angular-architects/module-federation": "^12.0.0",
 ```
