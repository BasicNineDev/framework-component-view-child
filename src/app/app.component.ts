import {Component, ViewChild} from '@angular/core';
import {ChildComponent} from './child.component';

@Component({
  selector: 'app-root',
  template: `
    <h3>Parent</h3>
    <button type="button" (click)="toggle()">자식 토글</button>
    <button type="button" (click)="changeText()">자식 텍스트 변경</button>
    <child></child>
  `,
  styles: []
})
export class AppComponent {

  // myChild 프로퍼티에 자식 컴포넌트 ChildComponent의 인스턴스가 바인딩된다.
  @ViewChild(ChildComponent) myChild: ChildComponent;

  toggle() {
    this.myChild.isShow = !this.myChild.isShow;
  }

  changeText() {
    // 자식 컴포넌트의 메소드를 직접 실행할 수 있다.
    this.myChild.changeText('자식 컴포넌트의 메소드를 직접 실행합니다.');
  }

}
