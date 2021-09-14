import create, { SetState } from "zustand";
import { persist } from "zustand/middleware";

interface PeopleState {
  peoples: String[];
  addPerson: (person: string) => void;
  updatePerson: (person: string, id: number) => void;
  deletePerson: (id: number) => void;
}

const peopleStore = (set: SetState<any>) => ({
  peoples: [],
  addPerson: (person: string) => {
    return set((state: PeopleState) => ({
      peoples: [...state.peoples, person],
    }));
  },
  updatePerson: (person: string, id: number) => {
    return set((state: PeopleState) => {
      state.peoples[id] = person;

      return {
        peoples: [...state.peoples],
      };
    });
  },
  deletePerson: (id: number) => {
    return set((state: PeopleState) => {
      const filteredData = state.peoples.filter(
        (person, index) => index + 1 !== id + 1
      );

      return {
        peoples: filteredData,
      };
    });
  },
});

const persistedPeopleStore = persist(peopleStore, { name: "people_store" });

export const usePeopleStore = create(persistedPeopleStore);
