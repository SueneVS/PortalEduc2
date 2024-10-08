import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AlunosComponent } from './pages/alunos/alunos.component';
import { CadastroAlunoComponent } from './pages/cadastro-aluno/cadastro-aluno.component';
import { DisciplinasComponent } from './pages/disciplinas/disciplinas.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'alunos',
    component: AlunosComponent
  },
  {
    path: 'cadastro',
    component: CadastroAlunoComponent
  },
  {
    path: 'disciplinas',
    component: DisciplinasComponent
  },
  {
    path: '**',
    component: LoginComponent
  }
];
