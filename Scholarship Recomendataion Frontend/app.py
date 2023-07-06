from copyreg import pickle
from math import degrees
from operator import itemgetter
from xml.etree.ElementTree import tostringlist
from flask import Flask,render_template,request
import pickle
import pandas as pd
import numpy as np
import difflib
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

#dataframe made of Combined_features
combined_features = pd.read_pickle('popular.pkl')
scholarship_data  = pd.read_pickle('scholarship_data.pkl')
list_of_all_titles = pd.read_pickle('list_of_all_titles.pkl')
find_close_match = pd.read_pickle('find_close_match.pkl')
close_match = pd.read_pickle('close_match.pkl')
index_of_the_scholarship = pd.read_pickle('index_of_the_scholarship.pkl')
similarity_score = pd.read_pickle('similarity_score.pkl')
sorted_similar_scholarship = pd.read_pickle('sorted_similar_scholarship.pkl')
similarity_score = pd.read_pickle('similarity_score.pkl')
similarity = pd.read_pickle('similarity.pkl')

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html',
                            title = list(combined_features['title'].values),
                            award = list(combined_features['award'].values),
                            description = list(combined_features['description'].values),
                            elegibility = list(combined_features['elegibility'].values),
                            state = list(combined_features['state'].values),
                            )

@app.route('/recommend')
def recommend():
    return render_template('recommend.html')

@app.route('/recommend_scholarships',methods =['POST'])
def recommend_five():
    scholarship_name = request.form.get('user_input')
    list_of_all_titles = scholarship_data['title'].tolist()
    find_close_match = difflib.get_close_matches(scholarship_name, list_of_all_titles)
    close_match = find_close_match[0]
    index_of_the_scholarship = scholarship_data[scholarship_data.title == close_match]['index'].values[0]
    similarity_score = list(enumerate(similarity[index_of_the_scholarship]))
    sorted_similar_scholarship = sorted(similarity_score, key = lambda x:x[1], reverse = True) 
    print('Scholarships suggested for you : \n')
    i = 1
    data =[]
    
    
    for scholarship in sorted_similar_scholarship:
        item = []
        schol= []
        for n in sorted_similar_scholarship:
        
        # temp_df = scholarship_data[scholarship_data['title'] == .index]
            index = scholarship[0]
            title_from_index = scholarship_data[scholarship_data.index==index]['title'].values[0]
            award_from_index = scholarship_data[scholarship_data.index==index]['award'].values[0]
            elegibility_from_index = scholarship_data[scholarship_data.index==index]['elegibility'].values[0]
            if (i<30):
                
                schol.append(i)
                schol.append(title_from_index)
                schol.append(award_from_index)
                schol.append(elegibility_from_index)
                # print(i, '.',title_from_index,'\n',award_from_index,'\n',elegibility_from_index)
                i+=1
            
        data.append(schol)
    print(data)
        # entry = data.append(i)
        # print(entry)
        # data.append(entry)
        # print(data)

        
    return render_template('recommend.html',data = data )


if __name__ == "__main__":
    app.run()
