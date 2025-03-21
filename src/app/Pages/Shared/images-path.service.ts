import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesPathService {

  constructor() { }

  getImagepath: string = 'assets/Images'

}
