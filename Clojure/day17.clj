(ns day17
  (:require [input :refer [f->nums]]
            [clojure.math.combinatorics :refer [subsets]]))

(defn -main [day]
  (let [it (->> day f->nums (map vector (range)) subsets (filter #(= 150 (apply + (map second %)))))]
    {:part1 (count it)
     :part2  (-> (map count it) sort (as-> x (take-while #(= (first x) %) x)) count)}))
