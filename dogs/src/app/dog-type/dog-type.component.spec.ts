import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DogTypeComponent } from "./dog-type.component";

describe("DogTypeComponent", () => {
	let component: DogTypeComponent;
	let fixture: ComponentFixture<DogTypeComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [DogTypeComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(DogTypeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
