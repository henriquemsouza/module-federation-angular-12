import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const remotEntryMfe1 =  'http://localhost:5000/remoteEntry.js'

const routes: Routes = [
  {
    path: 'mfe1',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: remotEntryMfe1,
        remoteName: 'mfe1',
        exposedModule: './Module',
      }).then((m) => {return m.NewModule}),
      // Obs por algum motivo  o return precisa ser diferente do exposedModule
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
