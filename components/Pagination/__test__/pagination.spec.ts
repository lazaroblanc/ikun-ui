import { afterEach, expect, test, describe, beforeEach } from 'vitest';
import KPagination from '../src';

let host: HTMLElement;

const initHost = () => {
	host = document.createElement('div');
	host.setAttribute('id', 'host');
	document.body.appendChild(host);
};
beforeEach(() => {
	initHost();
});
afterEach(() => {
	host.remove();
});

describe('Test: KPagination', () => {
	test('props: cls', async () => {
		const instance = new KPagination({
			target: host,
			props: {
				cls: 'k-pagination--test'
			}
		});
		expect(instance).toBeTruthy();
		expect((host as HTMLElement)!.innerHTML.includes('k-pagination--test')).toBeTruthy();
		expect(host.innerHTML).matchSnapshot();
	});
});