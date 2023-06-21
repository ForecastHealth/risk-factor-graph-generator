# risk-factor-graph-generator
A small web app to create graphs readable by botech-standard-utilities

# How to use
1. Clone the repository
2. Make sure you have Python installed
3. Make a virtual environment (if you want)
4. Install the requirements
5. `python main.py`
6. Navigate to the localhost address

# What it does
Specify the nodes you want as comma separated values e.g. a,b,c,d
On the next table, mark the cells where the row connects to the column
On the next table, specify any nodes that should be shared states
    For example, if you had smoker and drinker, there might be people who are both
Click process, and this will generate a JSON object in the console with the nodes and links
