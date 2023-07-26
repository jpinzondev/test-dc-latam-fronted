import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent implements OnInit {

  ngOnInit(): void {
    this.formSearch.get('id')?.valueChanges.subscribe((value) => {
      let isNumber = this.containsOnlyNumbers(value);

      if (value && (value < 0 || !isNumber)) {
        this.formSearch.get('id')?.setValue(null, { emitValue: false });
      }
    })
  }

  searchDisable: boolean = false;

  formSearch = new FormGroup({
    id: new FormControl(null, [Validators.min(1), Validators.pattern(/^([0-9])*$/)])
  })

  @Output() search: EventEmitter<number> = new EventEmitter();

  submit() {
    let id: number = Number(this.formSearch.get('id')!.value);
    this.search.emit(id);
  }

  containsOnlyNumbers(str: any) {
    return /^\d+$/.test(str);
  }
}
