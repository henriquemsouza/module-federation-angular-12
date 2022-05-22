import { loadRemoteEntry } from '@angular-architects/module-federation';

const remotEntryMfe1 =  'http://localhost:5000/remoteEntry.js'

Promise.all([
    loadRemoteEntry(remotEntryMfe1, 'mfe1')
])
.catch(err => console.error('Error loading remote entries', err))
.then(() => import('./bootstrap'))
.catch(err => console.error(err));
