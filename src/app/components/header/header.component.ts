import {Component, inject} from '@angular/core';
import {Auth, onAuthStateChanged, signOut} from "@angular/fire/auth";
import {Router} from "@angular/router";
import {FavoritePokemonsService} from "../../services/favorite-pokemons.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  auth = inject(Auth)
  router = inject(Router)

  constructor() {
  }

  ngOnInit(): void {

    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        console.log(user.uid);
      }
      else {

      }
    });
  }

  logout() {
    signOut(this.auth).then((result) => {
      this.redirectToLogin()
    })
      .catch(error => {
        console.log(error)
      })
  }

  private redirectToLogin() {
    this.router.navigate(['/login'])
  }

  redirectToRoot() {
    this.router.navigate([""])
  }
}
