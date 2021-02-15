import MuscleStructure from "./MuscleStructure";
import {add} from './MuscleStructure';

test('Placeholder Add Test', () => {
    const value = add(1,2);
    expect(value).toBe(3);
});