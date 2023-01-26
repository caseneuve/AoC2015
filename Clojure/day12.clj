(ns day12
  (:require [input :refer [f->str f->nums]]
            [cheshire.core :refer [parse-string]]))

(defn nums [o]
  (cond
    (int? o) o
    (vector? o) (into [] (map nums o))
    (map? o) (let [v (vals o)] (if (some #{"red"} v) 0 (into [] (map nums v))))
    :else 0))

(defn -main [day]
  (let [sum (comp (partial reduce +) flatten)]
    {:part1 (sum (f->nums day))
     :part2 (sum (nums (->> day f->str parse-string)))}))
