import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './template/home/home.component';
import { TodoReadComponent } from './template/todo/todo-read/todo-read.component';
import { TodoCreateComponent } from './template/todo/todo-create/todo-create.component';
import { NotFoundComponent } from './template/not-found/not-found.component';
import { TodoUpdateComponent } from './template/todo/todo-update/todo-update.component';

const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "todo",
        component: TodoReadComponent
    },
    {
        path: "todo/create",
        component: TodoCreateComponent
    },
    {
        path: "todo/update/:id",
        component: TodoUpdateComponent
    },
    {
        path: "**",
        component: NotFoundComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
