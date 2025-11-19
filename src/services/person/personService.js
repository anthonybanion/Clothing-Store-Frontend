import { apiRequest } from '../api';

// Register a new person
export async function createOnePerson(firstName, lastName, dni, email) {
  return await apiRequest('/persons', {
    method: 'POST',
    body: JSON.stringify({
      first_name: firstName,
      last_name: lastName,
      dni,
      email,
    }),
  });
}
// Get person by ID
export async function getOnePerson(personId) {
  return await apiRequest(`/persons/${personId}`, {
    method: 'GET',
  });
}
// Get all persons
export async function getAllPersons() {
  return await apiRequest('/persons', {
    method: 'GET',
  });
}
// Update person by ID
export async function updatePerson(personId, data) {
  return await apiRequest(`/persons/${personId}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
}

export async function updatePartialPerson(personId, data) {
  return await apiRequest(`/persons/${personId}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
  });
}
// Update person status (activate/deactivate)
export async function updatePersonStatus(personId, isActive) {
  return await apiRequest(`/persons/${personId}/status`, {
    method: 'PATCH',
    body: JSON.stringify({ is_active: isActive }),
  });
}

export async function deletePersonImage(personId) {
  return await apiRequest(`/persons/${personId}/image`, {
    method: 'DELETE',
  });
}
// Delete person by ID
export async function deletePerson(personId) {
  return await apiRequest(`/persons/${personId}`, {
    method: 'DELETE',
  });
}
