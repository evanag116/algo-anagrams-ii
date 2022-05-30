def anagrams_for(word, list_of_words):
		return [i for i in list_of_words if set(word.lower().replace(" ", "")) == set(i.lower().replace(" ", ""))]

