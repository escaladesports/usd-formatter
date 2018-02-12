import { expect } from 'chai'
import formatUsd from '../src'

describe('Format USD', () => {
	it('Should format string', () => {
		expect(formatUsd('12.99')).to.equal('$12.99')
	})
	it('Should format number with decimal', () => {
		expect(formatUsd(12.99)).to.equal('$12.99')
	})
	it('Should format number without decimal', () => {
		expect(formatUsd(12)).to.equal('$12.00')
	})
	it('Should format number with comma and without decimal', () => {
		expect(formatUsd('12,000')).to.equal('$12,000.00')
	})
	it('Should format number with comma and with decimal', () => {
		expect(formatUsd('12,000.99')).to.equal('$12,000.99')
	})
	it('Should insert comma', () => {
		expect(formatUsd(1000.00)).to.equal('$1,000.00')
	})
	it('Should format a messy string', () => {
		expect(formatUsd('asdf5.4ick')).to.equal('$5.40')
	})
})