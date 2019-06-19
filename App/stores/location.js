// Sh**t! I Smoke
// Copyright (C) 2018-2019  Marcelo S. Coelho, Amaury Martiny

// Sh**t! I Smoke is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Sh**t! I Smoke is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Sh**t! I Smoke.  If not, see <http://www.gnu.org/licenses/>.

import { types } from 'mobx-state-tree';

const location = name =>
  types.maybe(
    types.model(name, {
      latitude: types.number,
      longitude: types.number,
      name: types.maybe(types.string)
    })
  );

const current = location('CurrentStore');
const gps = location('ApiStore');

export const LocationStore = types
  .model('LocationStore', {
    current,
    gps
  })
  .actions(self => ({
    setCurrent (newCurrent) {
      self.current = newCurrent;
    },
    setGps (newGps) {
      self.gps = newGps;
    }
  }));
